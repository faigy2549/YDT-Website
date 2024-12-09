using DTOs;
using Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Services
{
    public interface ITopicService
    {
        Task<IEnumerable<TopicDTO>> GetAllAsync();
        Task<Topic> GetByIdAsync(int id);
        Task AddAsync(Topic topic);
        Task UpdateAsync(Topic topic);
    }
}
