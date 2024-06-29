import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface Props {
  children: React.ReactNode;
  href: string;
}

export default function NavLink(props: Props) {
  const { children, href } = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  const activeStyles = {
    fontWeight: '700',
    textDecoration: 'underline',
  };

  const inactiveStyles = {
    fontWeight: 'normal',
    textDecoration: 'none',
  };

  const linkStyles = isActive ? activeStyles : inactiveStyles;

  return (
    <Link href={href} passHref>
      <Box as="a" px={2} py={1} rounded="md" {...linkStyles}>
        {children}
      </Box>
    </Link>
  );
}
