import PropTypes from "prop-types";

function ColorSelector({colors}) {
  console.log(colors);
  return (
    <>
      <p className="mt-5 text-sm text-neutral-400">Color</p>
      <div className="flex gap-4 mt-3">
        {colors.map((colors, index) => (
          <button
            key={index}
            className={`flex shrink-0 ${colors.color} h-[30px] rounded-[50px] w-[30px]`}
          />
        ))}
      </div>
    </>
  );
}

ColorSelector.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
        color: PropTypes.string.isRequired,
    })  
).isRequired,
}

export default ColorSelector;
