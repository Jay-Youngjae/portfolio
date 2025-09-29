const Contact = () => (
  <div className="flex flex-col items-center text-center px-4" id="contact">
    <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-5 text-slate-800">Contact</h3>
    <div className="space-y-2 md:space-y-3">
      <p className="text-xs md:text-sm text-slate-900 flex items-center justify-center gap-2">
        <i className="fas fa-envelope text-base md:text-lg"></i>
        jea71882@naver.com
      </p>
      <p className="text-xs md:text-sm text-slate-900 flex items-center justify-center gap-2">
        <i className="fas fa-phone text-base md:text-lg"></i>
        010-9087-1832
      </p>
      <p>
        <a
          href="https://github.com/Jay-Youngjae"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-slate-900 flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-github text-base md:text-lg"></i>
          github.com/Jay-Youngjae
        </a>
      </p>
      <p>
        <a
          href="https://jea71882.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs md:text-sm text-slate-900 flex items-center justify-center gap-2 hover:text-blue-600 transition-colors"
        >
          <i className="fab fa-github text-base md:text-lg"></i>
          jea71882.tistory.com
        </a>
      </p>
    </div>
  </div>
)

export default Contact
