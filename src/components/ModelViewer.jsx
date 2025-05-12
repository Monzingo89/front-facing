export default function ModelViewer() {
  return (
    <model-viewer
      src="/card.glb"
      alt="Trading Card"
      auto-rotate
      camera-controls
      style={{ width: '100%', height: '500px', background: 'transparent' }}
      exposure="1"
      shadow-intensity="1"
      disable-tap
      interpolation-decay="200"
      tone-mapping="neutral"
      render-scale="2"
    />
  );
}
