import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Leadership = (typeof RESUME_DATA)["leadership"][number];

interface LeadershipPeriodProps {
  start: Leadership["start"];
  end: Leadership["end"];
}

function LeadershipPeriod({ start, end }: LeadershipPeriodProps) {
  return (
    <div
      className="shrink-0 whitespace-nowrap text-sm tabular-nums text-gray-500"
      title={`Period: ${start} to ${end}`}
    >
      {start} - {end}
    </div>
  );
}

interface LeadershipItemProps {
  item: Leadership;
}

function LeadershipItem({ item }: LeadershipItemProps) {
  const { title, organization, start, end, description, highlights } = item;
  const itemId = `leadership-${title.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Card className="border-none py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-start justify-between gap-x-2">
          <h3 className="font-semibold leading-none print:text-sm" id={itemId}>
            {title}
          </h3>
          <LeadershipPeriod start={start} end={end} />
        </div>
        <h4 className="min-w-0 text-pretty font-mono text-sm font-semibold leading-none print:text-[12px]">
          {organization}
        </h4>
      </CardHeader>
      <CardContent>
        <div className="mt-2 text-xs text-foreground/80 print:mt-1 print:text-[10px] text-pretty">
          {description}
          {highlights && highlights.length > 0 && (
            <ul className="list-inside list-disc">
              {highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface LeadershipListProps {
  leadership: readonly Leadership[];
}

export function Leadership({ leadership }: LeadershipListProps) {
  return (
    <Section>
      <h2
        className="border-b-2 border-foreground pb-1 text-xl font-bold"
        id="leadership-section"
      >
        Leadership &amp; Activities
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="leadership-section"
      >
        {leadership.map((item) => (
          <article key={`${item.title}-${item.organization}`}>
            <LeadershipItem item={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
