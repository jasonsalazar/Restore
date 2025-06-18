using Microsoft.EntityFrameworkCore;
using Restore.Entities;

namespace Restore.Data
{
    public class StoreContext(DbContextOptions options) : DbContext(options)
    {
        public required DbSet<Product> Products { get; set; }

        public required DbSet<Basket> Baskets { get; set; }
    }
}
