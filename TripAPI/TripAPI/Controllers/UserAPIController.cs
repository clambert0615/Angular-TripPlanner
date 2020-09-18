using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using TripAPI.Models;

namespace TripAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UserAPIController : ControllerBase
  {
    private readonly TripUsersDbContext _context;
    private PlacesController pc;

    public UserAPIController(TripUsersDbContext Context, IConfiguration configuration)
    {
      _context = Context;
      pc = new PlacesController(configuration);
    }
    //endpoint api/userapi/loginname
    [HttpGet("{loginName}")]
    public async Task<ActionResult<UserMaster>> GetUser(string loginName)
    {
      UserMaster user = await _context.UserMaster.FirstAsync(x => x.LoginName == loginName);
      if (user == null)
      {
        return NotFound();
      }
      else
      {
        return user;
      }
    }
    //Post: api/userapi
    [HttpPost]
    public async Task<ActionResult<UserMaster>> AddUser(UserMaster newUser)
    {
      if (ModelState.IsValid)
      {
        _context.UserMaster.Add(newUser);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetUser), new { loginName = newUser.LoginName }, newUser);
      }

      else
      {
        return BadRequest();
      }
    }
    //Update api/userapi/{loginname}
    [HttpPut]
    public async Task<ActionResult> UpdateUser(UserMaster updatedUser)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest();
      }
      else
      {
        _context.Entry(updatedUser).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return NoContent();
      }
    }
    //Delete api/userapi/{loginname}
    [HttpDelete("{loginName}")]
    public async Task<ActionResult> DeleteUser(string loginName)
    {
      UserMaster user = await _context.UserMaster.FirstAsync(x => x.LoginName == loginName);
      if (user == null)
      {
        return NotFound();
      }
      else
      {
        _context.UserMaster.Remove(user);
        await _context.SaveChangesAsync();
        return NoContent();
      }
    }
    [HttpGet("favorites/{userid}")]
    public async Task<ActionResult<List<PlaceDetails>>> GetFavorites([FromRoute] int userId)
    {
      List<Favorites> favList = _context.Favorites.Where(x => x.UserId == userId).ToList();
      List<PlaceDetails> pdList = await pc.GetFavoritesList(favList);
      return pdList;

    }
    [HttpPost("favorites")]
    public async Task<ActionResult<Favorites>> AddFavorite(Favorites favorites)
    {
      if (ModelState.IsValid)
      {
        _context.Favorites.Add(favorites);
        await _context.SaveChangesAsync();
        // return CreatedAtAction(nameof(GetFavorite), new { loginName = newUser.LoginName }, newUser);
        return Ok();
      }

      else
      {
        return BadRequest();
      }
    }
  }
  }
