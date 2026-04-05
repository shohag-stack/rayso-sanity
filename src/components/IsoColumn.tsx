import DribbbleCard from "./DribbbleCard";

export default function IsoColumn({
  indices,
  speed,
  offset,
}: {
  indices: number[];
  speed: string;
  offset: number;
}) {
  const doubled = [...indices, ...indices];
  return (
    <div
      className="flex flex-col gap-4 flex-shrink-0"
      style={{ marginTop: `${offset}%` }}
    >
      <div
        className="flex flex-col gap-4"
        style={{ animation: `isoScrollDown ${speed} linear infinite` }}
      >
        {doubled.map((idx, i) => (
          <DribbbleCard key={i} index={idx} />
        ))}
      </div>
    </div>
  );
}
