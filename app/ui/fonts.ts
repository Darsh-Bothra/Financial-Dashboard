import { Inter } from "next/font/google"
import { Lusitana } from "next/font/google"

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({

    subsets: ['latin'], // Specify the character subset you need [1, 2, 5]

    weight: ['400', '700'] // Optional: Specify font weights [1, 5, 7]

});
