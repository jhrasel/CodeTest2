import Link from "next/link";

// h1
export function H1({ h1 }) {
  return <h1>{h1}</h1>;
}

// h2
export function H2({ h2, className }) {
  return (
    <h2 className={`text-5xl font-bold text-main-color ${className}`}>{h2}</h2>
  );
}

// h3
export function H3({ h3, className }) {
  return (
    <h3 className={`text-3xl font-bold text-main-color ${className}`}>{h3}</h3>
  );
}

// h4
export function H4({ h4, className }) {
  return (
    <h4 className={`text-2xl font-bold text-main-color ${className}`}>{h4}</h4>
  );
}

// h5
export function H5({ h5, className }) {
  return (
    <h5 className={`text-lg font-medium text-text-color ${className}`}>{h5}</h5>
  );
}

// h6
export function H6({ h6, className }) {
  return (
    <h6 className={`text-base font-medium text-text-color ${className}`}>
      {h6}
    </h6>
  );
}

// p
export function P({ p, className }) {
  return (
    <p className={`text-base font-normal text-text-color ${className}`}>{p}</p>
  );
}

// a
export function ORLink({ name, url, className }) {
  return (
    <Link href={url} className={`text-base font-medium ${className}`}>
      {name}
    </Link>
  );
}
