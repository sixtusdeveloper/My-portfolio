import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sixtusdev",
  description: "Explore the portfolio of Sixtus, a skilled Software Engineer specializing in [React - Next.js, Typescript, MongoDB and much more]. Discover innovative projects, technical insights, and a commitment to creating impactful, user-focused applications. Let's build something great together.",
  icons: {
    icon: '/favicon.ico', // Ensure you have a favicon in the public folder
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: "#3371FF", // Set your theme color
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        variables: { 
          colorPrimary: "#3371FF", 
          fontSize: '14px' 
        },
        elements: {
          button: {
            padding: '10px 2px', 
          },
          formFieldInput: {
            borderRadius: '6px !important',  
            borderColor: '#333 !important',   
            padding: '10px !important',       
            backgroundColor: '#ffffff !important',
            color: '#333 !important',        
          },
        },
      }}
    >
      <html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}














// // THis is working well without the customizations
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { ThemeProvider } from "./provider";
// import { ClerkProvider } from "@clerk/nextjs";
// import Head from 'next/head';


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Sixtusdev",
//   description: "Explore the portfolio of Sixtus, a skilled Software Engineer specializing in [React - Next.js, Typescript, MongoDB and much more]. Discover innovative projects, technical insights, and a commitment to creating impactful, user-focused applications. Let's build something great together.",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider
//       appearance={{
//         variables: { 
//           colorPrimary: "#3371FF", 
//           fontSize: '14px' 
//         },
//         elements: {
//           button: {
//             padding: '10px 2px', 
//           },
//           formFieldInput: {
//             borderRadius: '6px !important',  
//             borderColor: '#333 !important',   
//             padding: '10px !important',       
//             backgroundColor: '#ffffff !important',
//             color: '#333 !important',        
//           },
//         },
//       }}
//     >
//       <html lang="en">
//         <Head>
//           <link rel="preconnect" href="https://fonts.googleapis.com" />
//           <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//           <link
//             href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Merriweather:wght@400;700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body className={inter.className}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             {children}
            
//           </ThemeProvider>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }













