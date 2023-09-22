const CardType3 = () => {
  return (
    <div className="w-96 aspect-square border p-2 flex flex-col rounded-sm gap-6">
      <div className="w-full aspect-video border relative">
        <img src="" className="w-full h-full rounded-md" />
        <span className="absolute top-2 right-2 font-black text-lg">JAPAN</span>
      </div>
      <span className="line-clamp-2">
        jwkkjehfkw hf wehf eifhwi ufh iwehf iwehufi weuhfi wehfiuwhf ihiuefh
        iweuhf ejfoiwefo wfoiwejf oweijfo wj{" "}
      </span>
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-green-900 font-bold">Group size - 20 people</span>
          <span className="text-red-600 font-bold">Seat availability - 12</span>
        </div>
        <div>
          <span>=> 7 days for trip</span>
        </div>
      </div>
    </div>
  );
};

export default CardType3;
