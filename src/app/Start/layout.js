import StartNavbar from '@/components/StartNavbar';

export default function StartLayout({ children }) {
    return (
        <>
            <StartNavbar />
            {children}
        </>
    );
}

