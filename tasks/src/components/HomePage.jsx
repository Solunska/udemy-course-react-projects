import img from "../assets/no-projects.png";
import Button from "./Button";

export default function HomePage({ onClick }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <div className="flex flex-col gap-1 my-4">
                <img className="w-16 h-16 object-contain mx-auto" src={img} />
                <h2 className="text-xl font-bold text-stone-700 my-4">No Projects Selected</h2>
                <p className="text-stone-400 mb-4">Select a project or get started with a new one</p>
                <p className="mt-8">
                    <Button label="Create new project" onClick={onClick} />
                </p>
            </div>
        </div>
    );
}