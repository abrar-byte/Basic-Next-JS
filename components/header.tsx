import Link from "next/link";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/users/detail">Users Detail</Link>
        </li>
      </ul>
    </div>
  );
}
