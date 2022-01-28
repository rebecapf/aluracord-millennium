import { Box } from "@skynexui/components";
import { useRouter } from 'next/router';
import appConfig from '../config.json';

export default function NotFound() {
  const roteamento = useRouter();
  return (
        <>
            <Box
                onClick={function (event) {
                    event.preventDefault();
                    roteamento.push('/');

                }}
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    // backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://cdn.dribbble.com/users/1848811/screenshots/3825883/media/ba500c9b4ee6cd8bbb1e9f6ad00d0888.png)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundBlendMode: 'multiply', backgroundPosition: 'center',
                }}
            ></Box>
        </>
    )
}