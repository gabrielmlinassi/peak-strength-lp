import NextImage from 'next/image';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { useMediaQuery } from 'hooks';
import Container from 'components/container';
import Text from 'components/Text';
import Button from 'components/button';
import SigninDialog from 'components/signin-dialog';

import ScreenshotHeroCombo from '/public/images/screenshot-hero-combo.png';

const Hero = () => {
  const router = useRouter();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const onOpenChange = (open: boolean) => {
    router.replace('', open ? '/signup' : '', { scroll: false });
  };

  return (
    <Container variant="inner">
      <div className="grid grid-cols-[minmax(auto,450px),1fr]">
        <div className="col-start-1">
          <h1>Strength Training Built For You</h1>
        </div>
        <div className="col-start-1 mt-5">
          <Text>
            Maximize your athletic potential with individualized, sport-specific training
            to increase your strength, explosiveness, and speed.
          </Text>
        </div>
        <div className="col-start-1 mt-8">
          {isDesktop ? (
            <SigninDialog onOpenChange={onOpenChange}>
              <Button>Start free trial</Button>
            </SigninDialog>
          ) : (
            <NextLink href="/signup" passHref>
              <Button>Start free trial</Button>
            </NextLink>
          )}
        </div>
        <div className="relative row-start-2 h-[400px] md:col-start-2 md:row-start-1 md:row-end-5 md:-mt-8 md:h-[700px]">
          <NextImage
            src={ScreenshotHeroCombo}
            layout="fill"
            objectFit="contain"
            sizes="(min-width: 48em) 50vw, 90vw"
            priority
            quality={100}
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
