using System;
using System.Collections.Generic;

namespace TripAPI.Models
{
    public partial class Favorites
    {
        public int FavId { get; set; }
        public int? UserId { get; set; }
        public string Places { get; set; }

        public virtual UserMaster User { get; set; }
    }
}
