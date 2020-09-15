using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TripAPI.Models;

namespace TripAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class CovidController : ControllerBase
  {
 
    [HttpGet("{zip}")]
    public async Task<Covid> GetCovid(string zip)
    {
      HttpClient client = new HttpClient();
      client.BaseAddress = new Uri("https://localcoviddata.com/covid19/v1/");
      HttpResponseMessage response = await client.GetAsync($"cases/newYorkTimes?zipCode={zip}&daysInPast=4");
      //install-package Microsoft.AspNet.WebAPI.Client
      Covid covid = await response.Content.ReadAsAsync<Covid>();

      return covid;
    }


  }
}
