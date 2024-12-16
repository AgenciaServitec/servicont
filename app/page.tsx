import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full h-full font-sans p-6">
      <div>
        <h1 className="text-4xl font-bold mb-3">Home page</h1>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          cumque deleniti, eos expedita facere obcaecati, odit officia officiis
          cumque deleniti, eos expedita facere obcaecati, odit officia officiis
          cumque deleniti, eos expedita facere obcaecati, odit officia officiis
          cumque deleniti, eos expedita facere obcaecati, odit officia officiis
          omnis placeat quas quidem quos, sequi? At error explicabo maiores sed
          totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          cumque deleniti, eos expedita facere obcaecati, odit officia officiis
          omnis placeat quas quidem quos, sequi? At error explicabo maiores sed
          totam.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Architecto cumque deleniti, eos expedita facere obcaecati, odit
          officia officiis omnis placeat quas quidem quos, sequi? At error
          explicabo maiores sed totam.Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Architecto cumque deleniti, eos expedita facere
          obcaecati, odit officia officiis omnis placeat quas quidem quos,
          sequi? At error explicabo maiores sed totam.
        </p>
      </div>
      <div className="mt-4">
        <Button className="flex justify-center w-full mt-4 pl-4 pr-4 py-2 text-base rounded min-h-min shadow-[0_4px] whitespace-pre bg-primary text-white hover:bg-primaryLight1 shadow-primaryDark2">
          Click me!
        </Button>
      </div>
    </div>
  );
}
