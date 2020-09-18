using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;
using TripAPI.Models;

namespace TripAPI.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class PlacesController : ControllerBase
  {
    private readonly string APIKey;
    
    public PlacesController(IConfiguration configuration)
    {
      APIKey = configuration.GetSection("ApiKeys")["Google"];
    }

    public HttpClient GetHttpClient()
    {
      HttpClient client = new HttpClient();
      client.BaseAddress = new Uri("https://maps.googleapis.com/maps/api/place/");
      return client;
    }
    [HttpGet("restaurants/{latitude}/{longitude}")]
    public async Task<Eating> GetRestaurants([FromRoute] float latitude, [FromRoute] float longitude)
    {
      HttpClient client = GetHttpClient();
      HttpResponseMessage response = await client.GetAsync($"nearbysearch/json?type=restaurant&key={APIKey}&location={latitude},{longitude}&radius=15000");
      //install-package Microsoft.AspNet.WebAPI.Client
      var restaurantjson = await response.Content.ReadAsStringAsync();
      Eating restaurant = JsonConvert.DeserializeObject<Eating>(restaurantjson);
      return restaurant;
    }
    [HttpGet("attractions/{latitude}/{longitude}")]
    public async Task<Attractions> GetAttractions([FromRoute] float latitude, [FromRoute] float longitude)
    {
      HttpClient client = GetHttpClient();
      HttpResponseMessage response = await client.GetAsync($"nearbysearch/json?type=tourist_attraction&key={APIKey}&location={latitude},{longitude}&radius=15000");
      //install-package Microsoft.AspNet.WebAPI.Client
      var attractionjson = await response.Content.ReadAsStringAsync();
      Attractions attraction = JsonConvert.DeserializeObject<Attractions>(attractionjson);
      return attraction;
    }
    [HttpGet("lodging/{latitude}/{longitude}")]
    public async Task<Lodging> GetLodging([FromRoute] float latitude, [FromRoute] float longitude)
    {
      HttpClient client = GetHttpClient();
      HttpResponseMessage response = await client.GetAsync($"nearbysearch/json?type=lodging&key={APIKey}&location={latitude},{longitude}&radius=15000");
      //install-package Microsoft.AspNet.WebAPI.Client
      var lodgingjson = await response.Content.ReadAsStringAsync();
      Lodging lodging = JsonConvert.DeserializeObject<Lodging>(lodgingjson);
      return lodging;
    }
    [HttpGet("details/{id}")]
    public async Task<PlaceDetails> GetDetails([FromRoute] string id)
    {
      HttpClient client = GetHttpClient();
       HttpResponseMessage response = await client.GetAsync($"details/json?place_id={id}&fields=name,formatted_address,photo,place_id,vicinity,website,rating,review&key={APIKey}");
      var detailsjson = await response.Content.ReadAsStringAsync();
      PlaceDetails details = JsonConvert.DeserializeObject<PlaceDetails>(detailsjson);
      details.apiKey = APIKey;
      return details;
    }
    [HttpGet("more")]
    public async Task<Places> MorePlaces([FromQuery] string pagetoken)
    {
        HttpClient client = GetHttpClient();
      HttpResponseMessage response = await client.GetAsync($"nearbysearch/json?pagetoken={pagetoken}&key={APIKey}");
      //install-package Microsoft.AspNet.WebAPI.Client
      var placesjson = await response.Content.ReadAsStringAsync();
      Places places = JsonConvert.DeserializeObject<Places>(placesjson);
      return places;
    }


    public async Task<List<PlaceDetails>> GetFavoritesList(List<Favorites> fl)
    {
      List<PlaceDetails> pdlist = new List<PlaceDetails>();
      HttpClient client = GetHttpClient();
      foreach (Favorites f in fl)
      {
        HttpResponseMessage response = await client.GetAsync($"details/json?place_id={f.Places}&fields=name,formatted_address,photo,place_id,vicinity,website,rating,review&key={APIKey}");
        var detailsjson = await response.Content.ReadAsStringAsync();
        PlaceDetails details = JsonConvert.DeserializeObject<PlaceDetails>(detailsjson);
        pdlist.Add(details);
      }
      return pdlist;
    }
  }
}

