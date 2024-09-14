import prisma from "@repo/db/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../lib/auth";
import { OnRampTransactions } from "../../../components/OnRampTransaction";
import { TransactionsTable } from "../../../components/TransactionsTable";

async function getTansactions() {
  const session = await getServerSession(authOptions);
  const userId = Number(session?.user?.id);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status,
    provider: t.provider,
  }));
}

export default async function () {
  const transactions = await getTansactions();
  return (
    <div className="flex flex-col mr-4 w-full">
      <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
        Transaction History
      </div>
      <div className="flex w-full font-sans border-b-2 border-gray-300 pb-2 ">
        <div className="flex-1 justify-start items-center font-bold">
          Transactions
        </div>
        <div className="flex-1 justify-start items-center font-bold">
          Amount
        </div>
        <div className="flex-1 justify-start items-center font-bold">Date</div>
        <div className="flex-1 justify-start items-center font-bold">
          Status
        </div>
      </div>
      <div className="pt-4">
        <TransactionsTable transactions={transactions} />
      </div>
    </div>
  );
}
