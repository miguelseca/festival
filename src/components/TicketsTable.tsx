export default function TicketsTable() {
  return (
    <div className="max-w-screen-lg mx-auto mt-20 pr-6 pl-6 text-zinc-900 dark:text-zinc-200">
      <h2 className="mt-20">Tickets</h2>
      <table className="mt-5 table w-full border border-zinc-500 border-collapse">
        <thead className="text-lg font-bold">
          <tr>
          <td className="border border-zinc-500 p-3">Tickets</td>
          <td className="border border-zinc-500 p-3">Price</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">
              Single day ticket
            </td>
            <td className="border border-zinc-500 py-2 px-3">30€</td>
          </tr>
          <tr>
            <td className="border border-zinc-500 py-2 px-3">7 day ticket</td>
            <td className="border border-zinc-500 py-2 px-3">140€</td>
          </tr>
        </tbody>

      </table>
        <p className="flex items-center justify-center font-bold">Once they're gone, they are gone!</p>
    </div>
  );
}

