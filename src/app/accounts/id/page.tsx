export default async function AccountId({
  searchParams,
}: {
  searchParams: Promise<{ id?: string }>;
}) {
  const { id } = await searchParams;

  return <div>Accounts Page {id}</div>;
}
