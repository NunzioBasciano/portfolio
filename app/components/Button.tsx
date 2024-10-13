import Link from "next/link";

interface IButtonProps {
  label: string;
  link?: string;
  downloadCV?: boolean;
  isDisabled?: boolean;
}

function Button(props: IButtonProps) {
  const { label, link, downloadCV = false, isDisabled = false } = props;

  // Bottone per il download del CV
  if (downloadCV) {
    return (
      <a href="/CV_Basciano-Nunzio.pdf" download>
        <button className="transition-transform duration-300 transform scale-100 hover:scale-110 hover:text-[var(--orange)] my-3 bg-[#0D1419] bg-gradient-to-r from-[var(--blue)] to-[var(--darkBlue)] text-white font-semibold w-fit py-2 px-6 rounded-2xl">
          {label}
        </button>
      </a>
    );
  }

  // Bottone con link normale
  return (
    <Link href={link || "#"} passHref>
      <button
        disabled={isDisabled}
        className={`transition-transform duration-300 transform scale-100 hover:scale-110 hover:text-[var(--orange)] my-3 bg-[#0D1419] bg-gradient-to-r from-[var(--blue)] to-[var(--darkBlue)] text-white font-semibold w-fit py-2 px-6 rounded-2xl ${
          isDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {label}
      </button>
    </Link>
  );
}

export default Button;
