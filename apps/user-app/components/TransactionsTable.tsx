import { Card } from "@repo/ui/card";


  
export const TransactionsTable = ({
  transactions,
}: {
  transactions: {
    time: Date;
    amount: number;
    // TODO: Can the type of `status` be more specific?
    status: string ;
    provider: string;
  }[];
}) => {
    
  if (!transactions.length) {
    return (
      <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </Card>
    );
  }
  return(

      <div className="pt-2">
    {transactions.map((t) => (
        <div className="flex w-full font-sans border-b-2 border-gray-300 py-2 ">
          <div className="flex-1 justify-start items-center ">
            {t.provider}
          </div>
          <div className={`flex-1 justify-start items-center`}>
          + Rs {t.amount / 100}
          </div>
          <div className="flex-1 justify-start items-center ">
          {t.time.toDateString()}
          </div>
          <div className="flex-1 justify-start items-center">
            {t.status}
          </div>
        </div>

    ))}
 </div>
)
};
