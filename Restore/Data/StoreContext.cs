using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Restore.Entities;
using Restore.Entities.OrderAggregate;

namespace Restore.Data
{
    public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public required DbSet<Product> Products { get; set; }

        public required DbSet<Basket> Baskets { get; set; }

        public required DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>()
                .HasData(
                    new IdentityRole { Id = "a79b37ca-1bf9-4e46-bc37-5cab13615149", Name = "Member", NormalizedName = "MEMBER" },
                    new IdentityRole { Id = "a96ee8a8-15b5-4f4d-8ba5-5b341f8fd2dc", Name = "Admin", NormalizedName = "ADMIN" }
                );
        }
    }
}
