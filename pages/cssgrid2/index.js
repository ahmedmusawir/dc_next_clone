import React from 'react';
import { Layout, ContentSection, GridSection } from 'components/layout';
import {
	GridCard,
	GridBlock,
	GridTextBlock,
	GridImageBlock,
} from 'components/general';

class CssGridPage2 extends React.Component {
	render() {
		return (
			<Layout
				title="Deep Cast - CSS Grid Example"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<ContentSection bgColor="dark">
					<GridSection>
						<GridBlock>
							<GridTextBlock
								theme="dark"
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=501" />
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="light">
					<GridSection>
						<GridBlock>
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=409" />
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="Deep Cast Rocks!"
								subtitle="We rule indeed ..."
								details="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								Facere amet, non pariatur qui voluptate, at nam molestiae
								
								Molestias dolores quia sit harum accusamus quaerat repudiandae.
								"
							/>
						</GridBlock>
						<GridBlock>
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=404" />
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="grey">
					<GridSection>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
						<GridBlock>
							<GridTextBlock
								title="CSS Grid Example Page"
								subtitle="A Content Section"
								details="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero alias voluptatibus dicta eos reiciendis ea, ratione amet fugiat
								recusandae iste, sed, quos repudiandae dolor animi eaque dolorum
								vitae mollitia odit."
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="pattern">
					<GridSection>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=0"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=10"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=100"
							/>
						</GridBlock>
						<GridBlock>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus cumque culpa quaerat tempora sed. Praesentium, ex officiis voluptates consectetur numquam aperiam consequuntur distinctio eligendi quisquam atque eos voluptatum perferendis reprehenderit"
								link="/"
								thumbnail="https://picsum.photos/300/200/?image=500"
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="grey">
					<GridSection>
						<GridBlock size="lg" nopadding>
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum veritatis doloremque veniam fugiat sed dolor dicta sit quam, consequatur temporibus ea libero unde iusto voluptas numquam quas dolorum reprehenderit dolores. ea libero unde iusto voluptas numquam quas dolorum reprehenderit dolores."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridCard
								title="This is Post 1 Title"
								description="Lorem ipsum dolor sit amet."
								link="/"
								thumbnail="https://via.placeholder.com/125x80"
							/>
						</GridBlock>
					</GridSection>
				</ContentSection>
				<ContentSection bgColor="pattern">
					<GridSection>
						<GridBlock nopadding size="md">
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=401" />
						</GridBlock>
						<GridBlock nopadding size="md">
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=402" />
						</GridBlock>
						<GridBlock nopadding size="md">
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=403" />
						</GridBlock>
						<GridBlock nopadding size="lg">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=404" />
						</GridBlock>
						<GridBlock nopadding size="md">
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=405" />
						</GridBlock>
						<GridBlock nopadding size="md">
							<GridImageBlock imageLink="https://picsum.photos/500/300?image=406" />
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=407" />
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=405" />
						</GridBlock>
						<GridBlock nopadding size="md">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=406" />
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=407" />
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=405" />
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=406" />
						</GridBlock>
						<GridBlock nopadding size="sm">
							<GridImageBlock imageLink="https://picsum.photos/500/200?image=407" />
						</GridBlock>
					</GridSection>
				</ContentSection>
			</Layout>
		);
	}
}
export default CssGridPage2;
