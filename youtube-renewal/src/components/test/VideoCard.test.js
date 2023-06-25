import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import { MemoryRouter, Route, useLocation } from 'react-router-dom';
import { fakeVideo as video } from '../../test/videos';
import { withRouters } from '../../test/utils';
import { formatAgo } from '../../util/date';
import VideoCard from '../VideoCard';

describe('VideoCard', () => {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  it('renders grid type correctly', () => {
    const component = renderer.create(
      withRouters(<Route path='/' element={<VideoCard video={video} />} />)
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders list type correctly', () => {
    const component = renderer.create(
      withRouters(
        <Route path='/' element={<VideoCard video={video} type='list' />} />
      )
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  test('renders video item', () => {
    render(
      withRouters(<Route path='/' element={<VideoCard video={video} />} />)
    );

    const image = screen.getByRole('img');
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, 'ko'))).toBeInTheDocument();
  });

  test('navigates to detailed video page with video state when clicked', () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }
    render(
      withRouters(
        <>
          <Route path='/' element={<VideoCard video={video} />} />
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>
      )
    );

    const card = screen.getByRole('listitem');
    userEvent.click(card);

    expect(screen.getByText(JSON.stringify(video))).toBeInTheDocument();
  });
});
