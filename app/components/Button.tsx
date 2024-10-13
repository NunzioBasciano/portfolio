import Link from "next/link";

interface IButtonProps {
  label: string;
  link?: string;
  downloadCV?: boolean;
}

function Button(props: IButtonProps) {
  const { label, link, downloadCV = false } = props;
  return downloadCV ? (
    // Bottone per il download del CV
    <a href="/CV_Basciano-Nunzio.pdf" download="/CV_Basciano-Nunzio.pdf">
      <button className="transition-transform duration-300 transform scale-100 hover:scale-110 mt-3 bg-[#0D1419] bg-gradient-to-r from-[var(--blue)] to-[var(--darkBlue)] text-white w-fit py-1 px-5 rounded-2xl">
        {label}
      </button>
    </a>
  ) : (
    // Bottone con link normale
    <Link href={link!}>
      <button className="transition-transform duration-300 transform scale-100 hover:scale-110 mt-3 bg-[#0D1419] bg-gradient-to-r from-[var(--blue)] to-[var(--darkBlue)] text-white w-fit py-1 px-5 rounded-2xl">
        {label}
      </button>
    </Link>
  );
}

export default Button;
