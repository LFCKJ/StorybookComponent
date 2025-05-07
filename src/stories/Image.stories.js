import Image from "../component/Image";

export default {
  title: "component/Image",
  component: Image,
  args: {
    src: "https://picsum.photos/200",
    width: 200,
    height: 200,
    alt: "샘플 이미지",
    mode: "cover",
    block: false,
    placeholder: "https://via.placeholder.com/200",
    lazy: false,
    threshold: 0.5,
  },
  argTypes: {
    lazy:{
      control:{type:'boolean'},
    },
    block:{
      name: "block",
      control:{type:'boolean'},
    },
    src: {
      name: "src",
      type: { name: "string", required: true },
      control: { type: "text" },
    },
    placeholder:{
      name: "placeholder",
      type:{name: "string"},
      control:{type:'text'},
    },
    threshold: {
      name: "threshold",
      type: { name: "number" },
      control: { type: 'number' },
    },
    width: {
      name: "width",
      control: { type: "range", min: 200, max: 600 },
    },
    height: {
      name: "height",
      control: { type: "range", min: 200, max: 600 },
    },
    alt: {
      name: "alt",
      control: { type: "text" },
    },
    mode: {
      name: "mode",
      options: ["cover", "fill", "contain"],
      control: { type: "inline-radio" },
    },
  },
};

export const Default = (args) => {
  return <Image {...args} />;
};

export const Lazy = (args)=>{
  return(
    <div>
      {
        Array.from(new Array(20),(_,k)=>k).map(i=>(
          <Image {...args} lazy={true} block={true} src={`${args.src}?${i}`} key={i}/>
        ))
      }
    </div>
  );
};
 