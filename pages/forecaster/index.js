import React from 'react';
import { Layout, ForecasterHeroBlock, PageContent } from 'components/layout';
import data from 'static/constants';
import {
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	P,
	A,
	Img,
	Col,
	Row,
	Container,
	Button,
} from 'components/general';

class Forecaster extends React.Component {
	static getInitialProps = async () => {
		const featuresData = data.page.features;

		return {
			featuresPageData: featuresData,
		};
	};

	getArticles = () => {
		const articles = [];
		this.props.featuresPageData.articles.map(d => {
			articles.push(<PageContent key={d.id} data={d} />);
		});
		return articles;
	};

	render() {
		const { title, description } = this.props.featuresPageData;

		return (
			<Layout
				title="Deep Cast - Forecaster"
				description="Artificial intelligence is changing how business works, but most companies don’t know how to make AI work for them. But here at Deep Cast, we do."
			>
				<ForecasterHeroBlock title={title} description={description} />
				{/* {this.getArticles()} */}
				<Container>
					<Row>
						<Col sm="12" md="12" lg="12">
							<H2>This is a test of h2 Tag</H2>
						</Col>
					</Row>
				</Container>
			</Layout>
		);
	}
}
export default Forecaster;
