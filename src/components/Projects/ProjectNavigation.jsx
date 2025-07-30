const NavigationArrow = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`absolute top-1/2 -translate-y-1/2 bg-white/20 border border-black/10 rounded-full w-10 h-10 flex items-center justify-center text-lg text-black/40 hover:bg-gray-400/60 hover:text-black/80 transition-all duration-300 z-10 disabled:opacity-30 disabled:cursor-not-allowed ${
      direction === 'prev' ? 'left-0' : 'right-0'
    }`}
  >
    {direction === 'prev' ? '‹' : '›'}
  </button>
);

export default NavigationArrow;