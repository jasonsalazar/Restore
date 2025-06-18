﻿using System.ComponentModel.DataAnnotations.Schema;

namespace Restore.Entities
{
    [Table("BasketItems")]
    public class BasketItem
    {
        public int Id { get; set; }
        public int Quantity { get; set; }

        // navigation properties
        public int ProductId { get; set; }
        public required Product Product { get; set; }

        public int BasketId { get; set; }
        public Basket Basket { get; set; } = null!;
    }
}