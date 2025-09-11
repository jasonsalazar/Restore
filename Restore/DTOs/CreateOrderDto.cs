using Restore.Entities.OrderAggregate;

namespace Restore.DTOs
{
    public class CreateOrderDto
    {
        public required ShippingAddress ShippingAddress { get; set; }
        public required PaymentSummary PaymentSummary { get; set; }
    }
}
