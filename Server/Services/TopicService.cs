using AutoMapper;
using DTOs;
using Entities;
using Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public class TopicService : ITopicService
    {
        private readonly ITopicRepository _topicRepository;
        private readonly IMapper _mapper;

        public TopicService(ITopicRepository topicRepository, IMapper mapper)
        {
            _topicRepository = topicRepository;
            _mapper = mapper;
        }

        public async Task<IEnumerable<TopicDTO>> GetAllAsync()
        {

            var topics = await _topicRepository.GetAllAsync();

            return _mapper.Map<IEnumerable<Topic>,IEnumerable<TopicDTO>>(topics);
        }

        public async Task<TopicDTO> GetByIdAsync(int id)
        {
            var topic = await _topicRepository.GetByIdAsync(id); 
            if (topic != null)
            {
                return _mapper.Map<Topic, TopicDTO>(topic); 
            }
            return null;
        }

        public Task AddAsync(TopicDTO topic)
        {
            Topic t=_mapper.Map<TopicDTO,Topic>(topic);
            return _topicRepository.AddAsync(t);
        }

        public Task UpdateAsync(TopicDTO topic)
        {
            Topic t = _mapper.Map<TopicDTO, Topic>(topic);
            return _topicRepository.UpdateAsync(t);
        }

        public async Task DeleteAsync(int id)
        {
            var topic = await _topicRepository.GetByIdAsync(id); 
            if (topic != null)
            {
                await _topicRepository.DeleteAsync(topic); 
            }
            else
            {
                throw new ArgumentException($"Topic with id {id} not found");
            }
        }

    }
}
