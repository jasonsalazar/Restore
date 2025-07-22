using Microsoft.AspNetCore.Identity;

namespace Restore.Entities
{
    public class User : IdentityUser
    {
        public int? AddressId { get; set; }
        public Address? Address { get; set; }
    }
}
