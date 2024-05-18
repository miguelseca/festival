type MobileMenuLinkProps = {
  linkId: number;
  subItems: string[];
  mobileMenuLinkOpen?: number;
};

export default function MobileMenuLink({
  linkId,
  subItems,
  mobileMenuLinkOpen,
}: MobileMenuLinkProps) {
  if (linkId == mobileMenuLinkOpen) {
    return (
      <>
        {subItems.map((item) => {
          return (
            <div className="relative text-center p-4 cursor-pointer text-pink-200 hover:text:zinc-200 transition-colors ease-in-out hover:bg-white/5">
              <span>{item}</span>
            </div>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
}
