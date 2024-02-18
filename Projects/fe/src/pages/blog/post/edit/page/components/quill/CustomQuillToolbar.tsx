import CustomUndo from "@/pages/blog/post/edit/page/components/quill/CustomUndo";
import CustomRedo from "@/pages/blog/post/edit/page/components/quill/CustomRedo";
import CustomImage from "@/pages/blog/post/edit/page/components/quill/CustomImage";

interface CustomQuillToolbarProps {
    className?: string
}

const CustomQuillToolbar: React.FC<CustomQuillToolbarProps> = ({ className }) => {
    return (
        <div id="toolbar" className={`${className}`}>
            <div className="ql-formats">
                <select className="ql-header" value={""} onChange={e => e.persist()}>
                    <option value="1">Header 1</option>
                    <option value="2">Header 2</option>
                    <option value="3">Header 3</option>
                    <option value="4">Header 4</option>
                    <option value="5">Header 5</option>
                    <option value="6">Header 6</option>
                    <option value="">Normal</option>
                </select>
            </div>

            <div className="ql-formats">
                <select className="ql-size" value={"16"} onChange={e => e.persist()}>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                    <option value="18">18</option>
                    <option value="20">20</option>
                    <option value="22">22</option>
                    <option value="24">24</option>
                    <option value="26">26</option>
                    <option value="28">28</option>
                    <option value="30">30</option>
                </select>
            </div>

            <div className="ql-formats">
                <select className="ql-font" value={"Noto_Sans_KR"} onChange={e => e.persist()}>
                    <option value="arial">Arial</option>
                    <option value="comic-sans">Comic Sans</option>
                    <option value="courier-new">Courier New</option>
                    <option value="georgia">Georgia</option>
                    <option value="helvetica">Helvetica</option>
                    <option value="lucida">Lucida</option>
                    <option value="Noto_Sans_KR">Noto KR</option>
                </select>
            </div>

            <div className="ql-formats">
                <button className="ql-align" value=""></button>
                <button className="ql-align" value="center"></button>
                <button className="ql-align" value="right"></button>
                <button className="ql-align" value="justify"></button>
            </div>

            <span className="ql-formats">
                <button className="ql-bold"></button>
                <button className="ql-italic"></button>
                <button className="ql-underline"></button>
                <button className="ql-strike"></button>
            </span>

            <span className="ql-formats">
                <button className="ql-list" value="ordered"></button>
                <button className="ql-list" value="bullet"></button>
                <button className="ql-indent" value="-1" />
                <button className="ql-indent" value="+1" />
            </span>

            <span className="ql-formats">
                <button className="ql-code-block" />
                <button className="ql-formula" />
                <button className="ql-clean"></button>
            </span>

            <span className="ql-formats">
                <button className="ql-blockquote"></button>
                <button className="ql-script" value="sub"></button>
                <button className="ql-script" value="super"></button>
            </span>

            <span className="ql-formats">
                <select className="ql-color" value={""} onChange={e => e.persist()}>
                </select>
                <select className="ql-background" value={""} onChange={e => e.persist()}>
                </select>
            </span>

            <span className="ql-formats">
                <button className="ql-link"></button>
                <button className="ql-custom-image">
                    <CustomImage />
                </button>
                {/* <button className="ql-image"></button> */}
                <button className="ql-video"></button>
            </span>

            {/* <span className="ql-formats">
                <button className="ql-direction" value="rtl"></button>
            </span> */}

            <span className="ql-formats">
                <button className="ql-undo">
                    <CustomUndo />
                </button>
                <button className="ql-redo">
                    <CustomRedo />
                </button>
            </span>

            {/* <span className="ql-formats">
                <button className="ql-custom-star">
                    <CustomInsertStar />
                </button>
            </span> */}
        </div>
    )
}

export default CustomQuillToolbar;