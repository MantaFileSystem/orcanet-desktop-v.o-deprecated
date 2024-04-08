import express, { Request, Response } from "express";

const router: express.Router = express.Router();

const WalletData = [
  {
    id: "59a53ee428a643e940546c5ccfc5663e",
    amount: -0.5523342,
    status: "pending",
    reason: "BananaHub.mp4",
    date: new Date("2021-10-10"),
  },
  {
    id: "f0623b42ea2d521b945a80b014f5694b",
    amount: 0.000012323,
    status: "failed",
    reason: "Dota2_OnePunchGodModeMenu.exe",
    date: new Date("2021-10-10"),
  },
  {
    id: "061b96f36e163ef82de2feefe7d7aaba",
    amount: -0.8311008,

    status: "processing",
    reason: "PayPaiBalanceInjector.bin",
    date: new Date("2021-10-10"),
  },
  {
    id: "b8ae1f8845ee9cbe64174ae089973b56",
    amount: 0.663450023,
    status: "processing",
    reason: "",
    date: new Date("2021-10-10"),
  },
  {
    id: "bcaeff20734041e27098eb5138b3003a",
    amount: 0.00432,
    status: "success",
    reason: "きかんしゃトーマス.avi",
    date: new Date("2021-10-10"),
  },
];

router.get("/wallet/transactions", (req: Request, res: Response) => {
  res.send(WalletData);
});

export { router as walletRouter };
