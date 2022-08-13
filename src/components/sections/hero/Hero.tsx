import NextImage from 'next/image';
import { useRouter } from 'next/router';

import Container from 'components/container';
import { Heading, Text } from 'components/typography';
import Button from 'components/button';
import SigninDialog from 'components/signin-dialog';
import ScreenshotHeroCombo from '/public/images/screenshot-hero-combo.png';

const Hero = () => {
  const router = useRouter();

  return (
    <Container variant="inner">
      <div className="grid grid-cols-[minmax(auto,450px),1fr]">
        <div className="col-start-1">
          <Heading variant="h1">Strength Training Built For You</Heading>
        </div>
        <div className="col-start-1 mt-5">
          <Text>
            Maximize your athletic potential with individualized, sport-specific training
            to increase your strength, explosiveness, and speed.
          </Text>
        </div>
        <div className="col-start-1 mt-8">
          <SigninDialog onOpenChange={(open) => router.push({}, open ? '/signin' : '')}>
            <Button>Start free trial</Button>
          </SigninDialog>
        </div>
        <div className="relative row-start-2 h-[400px] md:col-start-2 md:row-start-1 md:row-end-5 md:-mt-28 md:h-[700px]">
          <NextImage
            src={ScreenshotHeroCombo}
            layout="fill"
            objectFit="contain"
            sizes="700px"
            priority
            quality={100}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;