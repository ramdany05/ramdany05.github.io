"use client";

import { useCallback, useEffect, useRef, useState } from "react";
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
 * Hook to detect when an element enters the viewport
 * Disconnects after first intersection for performance
 */
function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const setRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!node) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        },
        { threshold, rootMargin: "0px 0px -40px 0px" }
      );
      observer.observe(node);
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      return () => observer.disconnect();
    },
    [threshold]
  );

  return { ref: setRef, inView };
}

interface TimelineItemProps {
  work: WorkExperience;
}

/**
 * Wraps a work experience item with an animated timeline bullet dot
 * A single continuous vertical line is rendered on the parent container
 */
function TimelineItem({ work }: TimelineItemProps) {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} className="relative pl-10 print:pl-0">
      {/* Timeline bullet dot */}
      <div
        className={cn(
          "absolute left-[10px] top-1.5 size-3 rounded-full border-2 border-foreground bg-card transition-all duration-500 print:hidden",
          inView ? "scale-100 opacity-100" : "scale-0 opacity-0"
        )}
        aria-hidden="true"
      />
      <WorkExperienceItem work={work} />
    </div>
  );
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [lineVisible, setLineVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setLineVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => observer.disconnect();
    }
  }, []);

  return (
    <Section>
      <h2
        className="border-b-2 border-foreground pb-1 text-xl font-bold"
        id="work-experience"
      >
        Work Experience
      </h2>
      <div
        ref={containerRef}
        className="relative space-y-4 print:space-y-0"
        role="feed"
        aria-labelledby="work-experience"
      >
        {/* Single continuous vertical timeline line connecting all bullets */}
        <div
          className={cn(
            "absolute left-[15px] top-3 w-0.5 bg-foreground/20 transition-all duration-700 ease-out print:hidden",
            lineVisible ? "h-[calc(100%-1.5rem)] opacity-100" : "h-0 opacity-0"
          )}
          aria-hidden="true"
        />
        {work.map((item) => (
          <TimelineItem key={`${item.company}-${item.start}`} work={item} />
        ))}
      </div>
    </Section>
  );
}
