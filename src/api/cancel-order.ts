import { api } from "@/lib/axios";

export interface CancelOrderParams {
  orderId: string;
}

export async function cancelOrder({ orderId }: CancelOrderParams) {
  // patch por que se esta realizando uma alteração de status
  await api.patch(`/orders/${orderId}/cancel`);
}
