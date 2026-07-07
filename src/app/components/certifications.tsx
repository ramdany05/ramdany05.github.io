import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import type { RESUME_DATA } from "@/data/resume-data";

type Certification = (typeof RESUME_DATA)["certifications"][number];

interface CertificationItemProps {
  certification: Certification;
}

/**
 * Individual certification card component
 */
function CertificationItem({ certification }: CertificationItemProps) {
  const { name, issuer, year, url } = certification;
  const certId = `certification-${name.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <Card className="border-none">
      <CardHeader>
        <div className="flex items-center justify-between gap-x-2 text-base">
          <h3 className="font-semibold leading-none" id={certId}>
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label={`${name} certificate`}
              >
                {name}
              </a>
            ) : (
              name
            )}
          </h3>
          <div
            className="text-sm tabular-nums text-gray-500"
            title={`Year: ${year}`}
          >
            {year}
          </div>
        </div>
      </CardHeader>
      <CardContent
        className="mt-2 text-foreground/80 print:text-[12px]"
        aria-labelledby={certId}
      >
        {issuer}
      </CardContent>
    </Card>
  );
}

interface CertificationsListProps {
  certifications: readonly Certification[];
}

/**
 * Main certifications section component
 * Renders a list of professional certifications
 */
export function Certifications({ certifications }: CertificationsListProps) {
  return (
    <Section>
      <h2 className="text-xl font-bold" id="certifications-section">
        Certifications
      </h2>
      <div
        className="space-y-4"
        role="feed"
        aria-labelledby="certifications-section"
      >
        {certifications.map((item) => (
          <article key={item.name}>
            <CertificationItem certification={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
