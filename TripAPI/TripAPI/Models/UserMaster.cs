using System;
using System.Collections.Generic;

namespace TripAPI.Models
{
    public partial class UserMaster
    {
        public UserMaster()
        {
            Favorites = new HashSet<Favorites>();
        }

        public int UserId { get; set; }
        public string UserName { get; set; }
        public string LoginName { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Favorites> Favorites { get; set; }
    }
}
