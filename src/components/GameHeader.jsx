export default function GameHeader({ winner }) {
  return (
    <div className="text-3xl font-bold text-center text-oxford_blue-500 bg-mint_cream-600">
      {winner} Won!
    </div>
  );
}
