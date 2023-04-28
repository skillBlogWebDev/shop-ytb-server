import { INestApplication } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as request from 'supertest';
import { SequelizeModule } from '@nestjs/sequelize';
import { Test, TestingModule } from '@nestjs/testing';
import { databaseConfig } from 'src/config/configuration';
import { SequelizeConfigService } from 'src/config/sequelizeConfig.service';
import { PaymentModule } from '../../src/payment/payment.module';
import { PaymentService } from 'src/payment/payment.service';

describe('Payment Service', () => {
  let app: INestApplication;
  let paymentService: PaymentService;

  beforeEach(async () => {
    const testModule: TestingModule = await Test.createTestingModule({
      imports: [
        SequelizeModule.forRootAsync({
          imports: [ConfigModule],
          useClass: SequelizeConfigService,
        }),
        ConfigModule.forRoot({
          load: [databaseConfig],
        }),
        PaymentModule,
      ],
    }).compile();

    paymentService = testModule.get<PaymentService>(PaymentService);

    app = testModule.createNestApplication();

    await app.init();
  });

  it('should make payment', async () => {
    const data = await paymentService.makePayment({ amount: 100 });

    expect(data).toEqual(
      expect.objectContaining({
        id: expect.any(String),
        status: expect.any(String),
        amount: {
          value: expect.any(String),
          currency: expect.any(String),
        },
        description: expect.any(String),
        recipient: {
          account_id: expect.any(String),
          gateway_id: expect.any(String),
        },
        created_at: expect.any(String),
        confirmation: {
          type: expect.any(String),
          confirmation_url: expect.any(String),
        },
        test: expect.any(Boolean),
        paid: expect.any(Boolean),
        refundable: expect.any(Boolean),
        metadata: expect.any(Object),
      }),
    );
  });
});
