import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";
import { cn } from "@/lib/utils";

type WorkExperience = (typeof RESUME_DATA)["work"][number];
type WorkBadges = readonly string[];

interface BadgeListProps {
  className?: string;
  badges: WorkBadges;
  ariaLabel?: string;
}

/**
 * Renders a list of badges for work experience
 * Handles both mobile and desktop layouts through className prop
 */
function BadgeList({ className, badges, ariaLabel }: BadgeListProps) {
  if (badges.length === 0) return null;

  return (
    <ul
      className={cn("inline-flex list-none gap-x-1 p-0", className)}
      aria-label={ariaLabel}
    >
      {badges.map((badge) => (
        <li key={badge}>
          <Badge
            variant="secondary"
            className="align-middle text-xs print:px-1 print:py-0.5 print:text-[8px] print:leading-tight"
          >
            {badge}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface WorkPeriodProps {
  start: WorkExperience["start"];
  end?: WorkExperience["end"];
}

/**
 * Displays the work period in a consistent format
 */
function WorkPeriod({ start, end }: WorkPeriodProps) {
  return (
    <div
      className="shrink-0 whitespace-nowrap text-sm tabular-nums text-gray-500"
      title={`Employment period: ${start} to ${end ?? "Present"}`}
    >
      {start} - {end ?? "Present"}
    </div>
  );
}

interface CompanyLinkProps {
  company: WorkExperience["company"];
  link: WorkExperience["link"];
}

/**
 * Renders company name with optional link
 */
function CompanyLink({ company, link }: CompanyLinkProps) {
  if (!link) {
    return <span>{company}</span>;
  }

  return (
    <a
      className="inline-flex items-center gap-1 underline decoration-foreground/30 underline-offset-2 hover:decoration-foreground"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${company} website`}
    >
      {company}
    </a>
  );
}

interface WorkExperienceItemProps {
  work: WorkExperience;
}

/**
 * Individual work experience card component
 * Handles responsive layout for badges (mobile/desktop)
 */
function WorkExperienceItem({ work }: WorkExperienceItemProps) {
  const {
    company,
    link,
    badges,
    techBadges,
    title,
    start,
    end,
    description,
    highlights,
  } = work;

  return (
    <Card className="border-none py-1 print:py-0">
      <CardHeader className="print:space-y-1">
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none print:text-sm">{title}</h3>
          <BadgeList
            className="gap-x-1"
            badges={badges}
            ariaLabel="Work type"
          />
        </div>

        <div className="flex items-start justify-between gap-x-2">
          <h4 className="min-w-0 text-pretty font-mono text-sm font-semibold print:text-[12px]">
            <CompanyLink company={company} link={link} />
          </h4>
          <WorkPeriod start={start} end={end} />
        </div>
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
        <div className="mt-2">
          <BadgeList
            className="-mx-2 flex-wrap gap-1"
            badges={techBadges}
            ariaLabel="Technologies used"
          />
        </div>
      </CardContent>
    </Card>
  );
}

interface WorkExperienceProps {
  work: (typeof RESUME_DATA)["work"];
}

/**
 * Main work experience section component
 * Renders a list of work experiences in chronological order
 */
export function WorkExperience({ work }: WorkExperienceProps) {
  return (
    <Section>
      <h2
        className="border-b-2 border-foreground pb-1 text-xl font-bold"
        id="work-experience"
      >
        Work Experience
      </h2>
      <div
        className="space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {work.map((item) => (
          <article key={`${item.company}-${item.start}`}>
            <WorkExperienceItem work={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
