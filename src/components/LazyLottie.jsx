import React from 'react';

export default function LazyLottie({ path, className, ariaLabel }) {
  const [Comp, setComp] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [{ default: Lottie }, json] = await Promise.all([
          import('lottie-react'),
          fetch(path).then((r) => r.json()),
        ]);
        if (mounted) {
          setComp(() => Lottie);
          setData(json);
        }
      } catch (e) {
        console.warn('Lottie load failed', e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [path]);

  if (!Comp || !data) return null;
  const Lottie = Comp;
  return (
    <Lottie animationData={data} className={className} aria-label={ariaLabel} />
  );
}
