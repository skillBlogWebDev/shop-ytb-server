import { ApiProperty } from '@nestjs/swagger';

class ShoppingCartItem {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 'Aliquid alias.' })
  name: string;

  @ApiProperty({ example: 2500 })
  price: number;

  @ApiProperty({
    example:
      'https://loremflickr.com/640/480/technics?random=849581742306099411950399951214',
  })
  image: string;

  @ApiProperty({ example: 5 })
  in_stock: number;

  @ApiProperty({ example: 'Salmon' })
  parts_manufacturer: string;

  @ApiProperty({ example: 'Henry' })
  boiler_manufacturer: string;

  @ApiProperty({ example: 1 })
  userId: number;

  @ApiProperty({ example: 1 })
  partId: number;

  @ApiProperty({ example: 3 })
  count: number;

  @ApiProperty({ example: 3 })
  total_price: number;

  @ApiProperty({ example: '2023-03-19T12:45:51.240Z' })
  createdAt: string;

  @ApiProperty({ example: '2023-03-19T12:45:51.240Z' })
  updatedAt: string;
}

export class GetAllResponse extends ShoppingCartItem {}
export class AddToCardResponse extends ShoppingCartItem {}
export class UpdateCountResponse {
  @ApiProperty({ example: 1 })
  count: number;
}
export class UpdateCountRequest {
  @ApiProperty({ example: 1 })
  count: number;
}
export class TotalPriceResponse {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
export class TotalPriceRequest {
  @ApiProperty({ example: 1000 })
  total_price: number;
}
