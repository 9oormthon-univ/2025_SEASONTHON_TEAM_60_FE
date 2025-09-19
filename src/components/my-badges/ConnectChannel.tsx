import Button from "@/components/common/Button";
import Section from "@/components/common/Section";

export default function ConnectChannel() {
  const GOOGLE_OAUTH_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/oauth2/authorization/google`;
  return (
    <Section className="flex-col">
      <p className="headline-small text-text-primary">
        YouTube 채널에 연결하고 고유 태그 발급받기
      </p>
      <Button size="md" href={GOOGLE_OAUTH_URL}>
        채널 연동 및 태그 생성하기
      </Button>
    </Section>
  );
}
