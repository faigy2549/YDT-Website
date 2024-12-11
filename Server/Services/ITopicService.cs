using DTOs;
using Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public interface ITopicService
    {
        Task<IEnumerable<TopicDTO>> GetAllAsync();
        Task<TopicDTO> GetByIdAsync(int id);
        Task AddAsync(TopicDTO topic);
        Task UpdateAsync(TopicDTO topic);
        Task DeleteAsync(int id);
    }
}
