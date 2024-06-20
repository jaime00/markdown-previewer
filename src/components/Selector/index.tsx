import { Label, Select } from 'flowbite-react';

export default function Selector({ currentValue, handleChange, optionList, label }: SelectorProps) {
	return (
		<>
			<Label htmlFor={currentValue} value={`${label}:`} className="font-bold mx-2.5" />
			<Select id={currentValue} value={currentValue} onChange={handleChange} sizing="sm">
				{optionList.map(({ value, name }) => (
					<option key={value} value={value}>
						{name}
					</option>
				))}
			</Select>
		</>
	);
}

type SelectorProps = Readonly<{
	currentValue: any;
	handleChange: React.ChangeEventHandler<HTMLSelectElement>;
	optionList: Array<{ value: string | number; name: string }>;
	label: string;
}>;
