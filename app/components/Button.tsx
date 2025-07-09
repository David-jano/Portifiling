import Link from 'next/link';

function Button() {
  return (
    <Link href="/">
      <button className="bg-teal-700 text-white rounded-b-sm p-2 px-2 cursor-pointer">
        Click me
      </button>
    </Link>
  );
}

export default Button;
